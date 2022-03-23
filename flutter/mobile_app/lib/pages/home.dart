import 'package:flutter/material.dart';
import 'package:mobile_app/pages/qr_code_scanner.dart';

class Home extends StatefulWidget {

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home'),
      ),
      body: Column(
        children: [
          Container(
            margin: EdgeInsets.fromLTRB(20, 10, 0, 0),
            child: Text(
              'Hello Admin',
              style: TextStyle(fontSize: 25, fontWeight: FontWeight.bold),
            ),
          ),

          Container(
            width: double.infinity,
            height: 150,
            margin: EdgeInsets.fromLTRB(10, 25, 10, 0),
            child: GestureDetector(
              onTap: () {
                print("Opening QR Code Scanner");
                Navigator.push(context, MaterialPageRoute(builder: (context)=> QRCodeScanner()));
              },
              child: Card(
                color: Colors.white,
                margin: EdgeInsets.fromLTRB(0, 10, 0, 0),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(10)
                ),
                elevation: 10,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(
                      Icons.qr_code_scanner_rounded,
                      size: 100,
                    ),
            
                    Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Container(
                          child: Text("Scan QR Code"),
                        )
                      ],
                    )
                  ],
                ),
              ),
            )
          ),

          Container(
            width: double.infinity,
            height: 150,
            margin: EdgeInsets.fromLTRB(10, 5, 10, 0),
            child: Card(
              color: Colors.white,
              margin: EdgeInsets.fromLTRB(0, 10, 0, 0),
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(10)
              ),
              elevation: 10,
            )
          ),
        ],
      ),
    );
  }

}