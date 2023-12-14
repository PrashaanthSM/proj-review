function Registration(){
    return(
    <div class="body-content">
      <div class="module">
      <img src="https://static.vecteezy.com/ti/vecteur-libre/p1/2459674-livreur-livraison-colis-client-service-de-livraison-en-ligne-smartphone-cartoon-art-illustration-vectoriel.jpg" width="400px" height="300px"/>
        <h1>Create An Account </h1>
        <form class="form" action="form.php" method="post" enctype="multipart/form-data" autocomplete="off">
          <div class="alert alert-error"></div>
          <input type="text" placeholder="User Name" name="username" required />
          <input type="email" placeholder="Email" name="email" required />
          <input type="password" placeholder="Password" name="password" autocomplete="new-password" required />
          <input type="password" placeholder="Confirm Password" name="confirmpassword" autocomplete="new-password" required />
         
          <input type="submit" value="Register" name="register" class="btn btn-block btn-primary" />
        </form>
      </div>
    </div>
    )
    }
    export default Registration;