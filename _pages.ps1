$ErrorActionPreference = "Continue"
$raw = ("protocol=https`nhost=github.com`n`n" | git credential fill 2>$null)
$tok = ($raw | Where-Object { $_ -like "password=*" }) -replace '^password=',''
$usr = ($raw | Where-Object { $_ -like "username=*" }) -replace '^username=',''
if (-not $tok) { Write-Output "NO_TOKEN"; exit 1 }

$hdr  = @{ Authorization = "token $tok"; "User-Agent" = "ps"; Accept = "application/vnd.github+json" }
$name = "$usr.github.io"

try {
  $body = @{ name = $name; description = "Personal site"; private = $false } | ConvertTo-Json
  $null = Invoke-RestMethod -Uri "https://api.github.com/user/repos" -Method Post -Headers $hdr -Body $body -ContentType "application/json"
  Write-Output "repo created: $name"
} catch { Write-Output "repo exists or create returned $($_.Exception.Response.StatusCode.value__)" }

Set-Location -LiteralPath "C:\Projects\portfolio"
if (-not (Test-Path ".git")) { cmd /c "git init -b main" 2>&1 | Out-Null }
cmd /c "git add -A" 2>&1 | Out-Null
cmd /c "git commit -m ""Personal site""" 2>&1 | Out-Null
cmd /c "git remote remove origin" 2>&1 | Out-Null
cmd /c "git remote add origin https://github.com/$usr/$name.git" 2>&1 | Out-Null
$out = cmd /c "git push -u origin main 2>&1" | Out-String
if ($out -match "fatal|rejected") { Write-Output "PUSH FAILED:`n$out" } else { Write-Output "pushed" }

Start-Sleep -Seconds 3
try {
  $null = Invoke-RestMethod -Uri "https://api.github.com/repos/$usr/$name/pages" -Method Post -Headers $hdr `
          -Body (@{ source = @{ branch = "main"; path = "/" } } | ConvertTo-Json) -ContentType "application/json"
  Write-Output "pages enabled"
} catch { Write-Output "pages: $($_.Exception.Response.StatusCode.value__) (already on, or auto for user sites)" }
Write-Output "URL will be: https://$name/"
