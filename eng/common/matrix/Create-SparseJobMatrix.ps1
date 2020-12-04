<#
    .SYNOPSIS
        Generates a JSON object representing an Azure Pipelines Job Matrix.
        See https://docs.microsoft.com/en-us/azure/devops/pipelines/process/phases?view=azure-devops&tabs=yaml#parallelexec

    .EXAMPLE
    .\eng\scripts\Create-JobMatrix $context
#>

[CmdletBinding()]
param (
    [Parameter(Mandatory=$True)][object] $ConfigPath
)

. $PSScriptRoot/functions.ps1

$config = Get-Content $ConfigPath | ConvertFrom-Json -AsHashtable

[Array]$matrix = GenerateMatrix $config "sparse"
$serialized = SerializePipelineMatrix $matrix

Write-Output $serialized.pretty
Write-Output "##vso[task.setVariable variable=matrix;isOutput=true]$($serialized.compressed)"