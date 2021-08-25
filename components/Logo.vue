<template>
  <img
    class="SPLogo"
    alt="Scene Packer Logo"
    src="/scene-packer-module-generator/hand-truck.svg"
  >
</template>

<style>
.SPLogo {
  height: 180px;
  width: 180px;
  transform: rotateY(360deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
