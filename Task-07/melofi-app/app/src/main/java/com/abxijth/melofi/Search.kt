package com.abxijth.melofi

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color

@Composable
fun Search() {
    Box(
        modifier = Modifier.fillMaxSize().background(Brush.verticalGradient(colors = listOf(Color(0xFF2E3740), Color(0xFF0B0E11)))),
        contentAlignment = Alignment.Center
    ) {
        Text(text="Search Page", color = Color.White)
    }






}
