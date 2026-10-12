# HA-DiPO

**Diffusion Policy Optimization for Heterogeneous Cooperative Transport**

[Project website](https://ha-dipo.github.io/) · [Sim2Sim demonstrations](https://ha-dipo.github.io/#sim2sim) · [Real-world demonstrations](https://ha-dipo.github.io/#sim2real)

HA-DiPO (Heterogeneous-Agent Diffusion Policy Optimization) is a hierarchical multi-agent reinforcement learning framework for robots that transport an unfixed shared payload. Independent diffusion policies coordinate robots with different motion capabilities under centralized training with decentralized execution.

The coordination policies learn from scratch through reward-driven simulator interaction without demonstrations. At execution, each robot uses local robot and payload observations, without partner-state inputs or inter-robot messages.

## Method

- **Team-value-guided diffusion:** centralized twin critics guide robot-specific diffusion policies through a variational diffusion-path objective.
- **Hierarchical coordination:** high-level policies generate base-motion commands, and frozen, embodiment-specific PPO-pretrained policies track them.
- **Decentralized execution:** onboard LiDAR and IMU measurements provide local payload feedback. Reflective markers and geometric constraints support payload-center and axis estimation.

The website includes the manuscript’s framework and onboard-perception figures. The perception figure illustrates a three-band example; hardware deployment uses five reflective markers.

## Demonstrations

**Sim2Sim:** policies trained in Isaac Lab are executed in MuJoCo. B2 + B2W demonstrations include forward and backward motion, left and right turns, lateral motion, backward payload perturbation, and continuous multi-command transport. A B2 + B2 team demonstrates homogeneous multi-command transport.

**Sim2Real:** the featured film and category clips show B2 + B2W straight-line transport and turning, with and without an additional payload, and B2W–human cooperative transport. In the human–robot setting, an MPPI controller converts a rod-center reference trajectory into velocity commands for the learned coordination policy.

## Website contents

This repository contains the project website and its media:

- `index.html`: method, figures, and demonstration gallery.
- `styles.css`: responsive page layout.
- `script.js`: video playback controls.
- `assets/images/`: manuscript figures and video posters.
- `assets/videos/`: Sim2Sim and real-world demonstration videos.

## Local preview

From the repository root, run:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open [localhost:4173](http://127.0.0.1:4173/) in a browser. The site is served directly from static files.
