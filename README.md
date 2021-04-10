# Blog Client

Este proyecto consta de 3 partes, el cliente donde el usuario puede ver la informacion y agregar comentarios a los diferentes post.

[Pagina Cliente](https://spardutti.github.io/blog-client/)


El panel administrativo, donde un admin (cualquier usuario registrado) puede crear, editar, borrar y publicar los Posts.


[Pagina Admin](https://spardutti.github.io/blog-admin/)
[Github Admin](https://github.com/Spardutti/blog-admin)

Y por ultimo el servidor, el cual se encarga de manejar toda la informacion de la base datos y hacer los request.

[Github Server](https://github.com/Spardutti/blog-server/)

# El Proyecto

Los usuarios que ingresen a su cuenta podran ver los diferentes posts creados por el administrador, y podran dejar comentarios en los diferentes posts. Cuenta con un sistema de autorizacion gestinado con passportjs y jsonwebtokens, las cual son almacenadas en localStorage para mantener la sesion iniciada del usuario. Una vez que el token expire, el usuario tendra que volver a acceder a su cuenta para generar un nuevo Token.

Toda la informacion es traida y enviada atraves del servidor que se encarga de gestionar todos los request(GET, POST, PUT, DELETE)
La navegacion es realizada mediante React Router
