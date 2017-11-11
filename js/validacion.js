
$(function()
{
  var opcion = 0;
  var identificacion = 0;
  $(document).ready(function()
  {
    $( "#nombre" ).val( "" );
    $( "#email" ).val( "" );
    $( "#mensaje" ).val( "Your message" );
    $( "#enviar" ).removeAttr( "disabled" );
  });


 $( "#enviar" ).click(function() // verificar los datos del formulario
  {
      if( $( "#nombre" ).val() != "" )
      {
        if( $( "#email" ).val() != "" )
        {
        
          if( $( "#mensaje" ).val() != "" )
          {
             
                    $( "#nombre" ).val( "" );
                    $( "#email" ).val( "" );
                    $( "#mensaje" ).val( "Your message" );
              
                    alert( "Tu mensaje ha sido enviado!" );
          }
          else
          {
            alert( "No hay contenido en el mensaje" );
          } 
              
        }
        else
        {
        alert( "Debes de proporcionar tu email");
        }
      }
      else
      {
        alert( "Debes de proporcionar tu nombre");
      }  
  });

});