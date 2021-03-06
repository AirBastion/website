if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(a) {
    return window.setTimeout(a, 1000 / 60)
  })
}
var stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
stats.domElement.style.display = "none";
document.body.appendChild(stats.domElement);
/*!
 * Mantis.js / jQuery / Zepto.js plugin for Constellation
 * @version 1.2.2
 * @author Acauã Montiel <contato@acauamontiel.com.br>
 * @license http://acaua.mit-license.org/
 */
(function(c, b) {
  function a(g, f) {
    var d = "innerHeight" in b ? b.innerHeight : document.documentElement.offsetHeight;
    var j = c(g),
      i = g.getContext("2d"),
      k = {
        star: {
          color: "rgba;(255, 255, 255, .5)",
          width: 1,
          randomWidth: true
        },
        line: {
          color: "rgba(255, 255, 255, .5)",
          width: 0.2
        },
        position: {
          x: 0,
          y: 0
        },
        width: b.innerWidth,
        height: b.innerHeight,
        velocity: 0.1,
        length: 200,
        distance: 200,
        radius: 850,
        stars: []
      },
      e = c.extend(true, {}, k, f);

    function h() {
      this.x = Math.random() * g.width;
      this.y = Math.random() * g.height;
      this.vx = (e.velocity - (Math.random() * 0.5));
      this.vy = (e.velocity - (Math.random() * 0.5));
      this.radius = e.star.randomWidth ? (Math.random() * e.star.width) : e.star.width
    }
    h.prototype = {
      create: function() {
        i.beginPath();
        i.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        i.fill()
      },
      animate: function() {
        var l;
        for (l = 0; l < e.length; l++) {
          var m = e.stars[l];
          if (m.y < 0 || m.y > g.height) {
            m.vx = m.vx;
            m.vy = -m.vy
          } else {
            if (m.x < 0 || m.x > g.width) {
              m.vx = -m.vx;
              m.vy = m.vy
            }
          }
          m.x += m.vx;
          m.y += m.vy
        }
      },
      line: function() {
        var o = e.length,
          p, l, n, m;
        for (n = 0; n < o; n++) {
          for (m = 0; m < o; m++) {
            p = e.stars[n];
            l = e.stars[m];
            if ((p.x - l.x) < e.distance && (p.y - l.y) < e.distance && (p.x - l.x) > -e.distance && (p.y - l.y) > -e.distance) {
              if ((p.x - e.position.x) < e.radius && (p.y - e.position.y) < e.radius && (p.x - e.position.x) > -e.radius && (p.y - e.position.y) > -e.radius) {
                i.beginPath();
                i.moveTo(p.x, p.y);
                i.lineTo(l.x, l.y);
                i.stroke();
                i.closePath()
              }
            }
          }
        }
      }
    };
    this.createStars = function() {
      var m = e.length,
        n, l;
      i.clearRect(0, 0, g.width, g.height);
      for (l = 0; l < m; l++) {
        e.stars.push(new h());
        n = e.stars[l];
        n.create()
      }
      n.line();
      n.animate()
    };
    this.setCanvas = function() {
      g.width = e.width;
      g.height = e.height
    };
    this.setContext = function() {
      i.fillStyle = e.star.color;
      i.strokeStyle = e.line.color;
      i.lineWidth = e.line.width
    };
    this.setInitialPosition = function() {
      if (!f || !f.hasOwnProperty("position")) {
        e.position = {
          x: g.width * 0.5,
          y: g.height * 0.5
        }
      }
    };
    this.loop = function(l) {
      l();
      b.requestAnimationFrame(function() {
        stats.begin();
        this.loop(l);
        stats.end()
      }.bind(this))
    };
    this.bind = function() {
      j.on("mousemove", function(l) {
        e.position.x = l.pageX - j.offset().left;
        e.position.y = l.pageY - j.offset().top
      })
    };
    this.init = function() {
      this.setCanvas();
      this.setContext();
      this.setInitialPosition();
      this.loop(this.createStars);
      this.bind()
    }
  }
  c.fn.constellation = function(d) {
    return this.each(function() {
      var e = new a(this, d);
      e.init()
    })
  }
})($, window);
$("header__background").constellation({
  star: {
    width: 3
  },
  line: {
    color: "rgba(255, 0, 0, .5)"
  },
  radius: 200
});
