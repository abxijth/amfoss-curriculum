package com.abxijth.melofi

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.size
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.material3.Button
import androidx.compose.runtime.*
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.input.PasswordVisualTransformation

@Composable
fun Register() {

    var email by remember {
        mutableStateOf("")
    }
    var username by remember {
        mutableStateOf("")
    }
    var password by remember {
        mutableStateOf("")
    }


    Column(
        modifier = Modifier.fillMaxSize().background(Color.White),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally

    ) {

        Image(painter = painterResource(id = R.drawable.logo), contentDescription = "Logo", modifier = Modifier.size(150.dp))

        Spacer(modifier = Modifier.height(4.dp))

        Text(text="MeloFi", fontSize = 28.sp, fontWeight = FontWeight.Bold)
        Text(text="Register your account")

        Spacer(modifier = Modifier.height(4.dp))

        OutlinedTextField(value = email, onValueChange = {
            email = it
        }, label ={
            Text(text="Email")
        })
        Spacer(modifier = Modifier.height(10.dp))

        OutlinedTextField(value = username, onValueChange = {
            username = it
        }, label ={
            Text(text="Username")
        })

        Spacer(modifier = Modifier.height(10.dp))


        OutlinedTextField(value = password, onValueChange = {
            password = it
        }, label ={
            Text(text="Password")
        }, visualTransformation = PasswordVisualTransformation())

        Spacer(modifier = Modifier.height(10.dp))

        Button(onClick = {}) {
            Text(text="Register")
        }

        Spacer(modifier = Modifier.height(50.dp))

        Text(text="Forgot Password?", modifier = Modifier.clickable{ })










    }

}