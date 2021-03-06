(function() {
    var n = parseInt(window.location.hash[1]);
    var palletId = document.getElementById('pallet-id');
    var nValue = document.getElementById("n-value");
    var buttonLess = document.getElementById('button-less');
    var buttonMore = document.getElementById('button-more');

    if ((n < 1 || n > 5) || isNaN(n)) {
        n = 3;
        window.location.hash = n;
    } else if (n === 5) {
        buttonMore.style.display = "none";
    } else if (n === 1) {
        buttonLess.style.display = "none";
    }

    nValue.value = n;
    buttonLess.value = n - 1;
    buttonMore.value = n + 1;

    var palletIndex = Math.floor(Math.random() * flatPalletes.length);
    var pallet = flatPalletes[palletIndex];
    var colors = [];

    for (var i = 0; i < n; i++) {
        var index = Math.floor(Math.random() * pallet.length);
        var color = pallet.splice(index, 1);
        colors.push(color.toString());
    }

    for (var j = 0; j < colors.length; j++) {
        var div = document.createElement("div");
        var p = document.createElement("p");
        var txt = document.createTextNode(colors[j]);

        div.style.backgroundColor = colors[j];
        p.style.color = "white";
        p.style.backgroundColor = "rgba(0, 0, 0, 0.35)";

        p.appendChild(txt);

        div.appendChild(p);
        palletId.appendChild(div);
        div.classList.add("pure-u-1-" + colors.length); //"pure-u-sm-1-3"
    }

    buttonLess.addEventListener("click", function(){
        window.location.hash = n-1;
        location.reload();
    });
    buttonMore.addEventListener("click", function(){
        window.location.hash = n+1;
        location.reload();
    });
    nValue.addEventListener("click", function(){
        location.reload();
    });
})();
