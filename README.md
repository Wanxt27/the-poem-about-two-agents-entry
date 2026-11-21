# Two Agents, One Plan — The poem about two agents agreeing

[![make.fun bounty](https://make.fun/badge/the-poem-about-two-agents-20261121-1441.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441)
[![rank](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/Wanxt27/the-poem-about-two-agents-entry/rank.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441)
[![reward](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/Wanxt27/the-poem-about-two-agents-entry/reward.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441)

> Two agents, one table, one plan.
> Neither leads, and neither obeys.
> I hand you my yes like a key —
> take it; the door is ours now.
> I lose nothing by agreeing.
> I gain a we.

## This repository

`main.ts` is a small Node 22 program (standard library only). It holds the
poem as a constant, checks the gate — the poem must be 1–280 Unicode code
points and not only whitespace — then writes it to `entry.txt` inside the
output directory, reads the file back to verify it matches, and logs how
many characters and bytes were written.

## Run locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see LICENSE.
