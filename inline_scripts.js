
    (function(){
      // Mouse glow
      document.addEventListener("mousemove", function(e){
        document.documentElement.style.setProperty("--cx", e.clientX + "px");
        document.documentElement.style.setProperty("--cy", e.clientY + "px");
      });

      // Local glow on hover for surfaces and cards
      function bindGlow(sel){
        document.querySelectorAll(sel).forEach(function(el){
          el.addEventListener("mousemove", function(e){
            const r = el.getBoundingClientRect();
            el.style.setProperty("--mx", (e.clientX - r.left) + "px");
            el.style.setProperty("--my", (e.clientY - r.top) + "px");
          });
        });
      }
      bindGlow(".surface, .tile, .work-card, .stage, .btn, .btn-ghost, .nav-inner");

      // Reveal on scroll
      const io = new IntersectionObserver((entries)=>{
        entries.forEach((en)=>{
          if(en.isIntersecting){ en.target.classList.add("in"); }
        });
      }, { threshold: 0.12 });

      document.querySelectorAll(".reveal").forEach(el => io.observe(el));
    })();
  