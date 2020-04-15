

(function appelHeader ()
{
    $.ajax(
        {
            url: "../html/header.html", 
            success: function(result)
            {
                $("header").html(result);
                (function newmdp()
                {
                    $("#mdpoublie").click(function()
                {
                    prompt("Entrez votre mail pour recevoir un mot de passe provisoire")
    
                })
}());
                
            }
        });
}());  

(function appelFooter ()
{
    $.ajax(
        {
            url: "../html/footer.html", 
            success: function(result)
            {
                $("footer").html(result);
                
            }
        });
}());