import 'package:flutter/material.dart';
import 'package:mobile_app/pages/home.dart';

class Login extends StatefulWidget {

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {
  static final emailAddress = TextEditingController();
  static final password = TextEditingController();

  String emailAddressError, passwordError;

  bool passwordVisibility = true;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Container(
        child: ListView(
          children: [
            Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                SizedBox(height: 20),

                Text(
                  'Mobile App',
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 25),
                ),

                SizedBox(height: 30),

                // Login Image
                Image.asset('assets/images/login.png'),

                // Email Address
                Container(
                  child: TextField(
                    controller: emailAddress,
                    decoration: InputDecoration(
                      prefixIcon: Icon(Icons.email),
                      labelText: 'Email Address',
                      border: OutlineInputBorder(),
                      errorText: emailAddressError,
                    ),
                  ),
                  padding: EdgeInsets.fromLTRB(30, 0, 30, 20),
                ),

                // Password
                Container(
                  child: TextField(
                    obscureText: passwordVisibility,
                    controller: password,
                    decoration: InputDecoration(
                      prefixIcon: Icon(Icons.lock),
                      labelText: 'Password',
                      border: OutlineInputBorder(),
                      errorText: passwordError,
                      suffixIcon: GestureDetector(
                        onTap: (){
                          setState(() {
                            passwordVisibility = !passwordVisibility;
                          });
                        },
                        child: Icon(passwordVisibility ? Icons.visibility : Icons.visibility_off),
                      )
                    ),
                  ),
                  padding: EdgeInsets.fromLTRB(30, 0, 30, 20),
                ),

                Container(
                  child: TextButton(
                    style: TextButton.styleFrom(
                      primary: Colors.white,
                      backgroundColor: Colors.lightBlueAccent[700],
                      textStyle: TextStyle(fontSize: 15, fontWeight: FontWeight.bold),
                    ),
                    child: Text('LOGIN'),  
                    onPressed: () {
                      if(emailAddress.text.isEmpty) {
                        setState(() {
                          emailAddressError = 'Email Address is compulsory';
                        });
                      }

                      if(password.text.isEmpty) {
                        setState(() {
                          passwordError = "Password can't be Empty";
                        });
                      }

                      if(emailAddress.text == "admin@gmail.com") {
                        setState(() {
                          emailAddressError = null;
                        });

                        if(password.text == "admin@123") {
                          setState(() {
                            passwordError = null;
                          });
                          Navigator.pushReplacement(context, MaterialPageRoute(builder: (context)=> Home()));
                        }
                        else {
                          setState(() {
                            passwordError = "Invalid Password";
                          });
                        }
                      }
                      else {
                        setState(() {
                          emailAddressError = "Invalid Email Address";
                        });
                      }
                    },
                  ),
                  width: double.infinity,
                  padding: EdgeInsets.fromLTRB(30, 0, 30, 0),
                )
              ]
            )
          ],
        ),
      ),
    );
  }
}