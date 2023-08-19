document.addEventListener('DOMContentLoaded', function() {
  barba.init({
    transitions: [{
      async leave(data) {
        const done = this.async();
        // Adicione animações de saída para elementos conforme necessário
        await gsap.to(data.current.container, { opacity: 0, duration: 0.5 });
        done();
      },
      async enter(data) {
        // Adicione animações de entrada para elementos conforme necessário
        await gsap.from(data.next.container, { opacity: 0, duration: 0.5 });
      }
    }]
  });
});
