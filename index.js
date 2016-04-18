(function()
{
    var n = parseInt(window.location.hash[1]);
    var palletId = document.getElementById('pallet-id');

    if ((n < 1 || n > 5) || isNaN(n))
    {
        palletId.innerHTML = "<div class='pure-u-1-1'><h1>Set a hash value from #1 to #5 after the URL. </h1><h4>(e.g: '...flat-palletes-front/#1', '...flat-palletes-front/#2')</h4></div>";
    }
    else
    {
        var palletIndex = Math.floor(Math.random() * flatPalletes.length);
        var pallet = flatPalletes[palletIndex];
        var colors = [];

        for (var i = 0; i < n; i++)
        {
            var index = Math.floor(Math.random() * pallet.length);
            var color = pallet.splice(index, 1);
            colors.push(color.toString());
        }

        for (var j = 0; j < colors.length; j++)
        {
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
    }
})();
