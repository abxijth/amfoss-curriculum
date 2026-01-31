package com.abxijth.melofi

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Shadow
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp




@Composable
fun Dashboard() {

    var songs by remember { mutableStateOf<List<SongData>>(emptyList()) }
    var isLoading by remember { mutableStateOf(true) }

    LaunchedEffect(Unit) {
        try {
            songs = RetrofitInstance.api.getSongs()
        } catch (e: Exception) {
            e.printStackTrace()
        } finally {
            isLoading = false
        }
    }

    if (isLoading) {
        Box(
            modifier = Modifier.fillMaxSize().background(Brush.verticalGradient(colors = listOf(Color(0xFF2E3740), Color(0xFF0B0E11)))),
            contentAlignment = Alignment.Center,

        ) {
            Text("Loading...", color = Color.White)
        }
        return
    }


    LazyColumn(
        modifier = Modifier.fillMaxSize().background(Brush.verticalGradient(
            colors = listOf(Color(0xFF2E3740), Color(0xFF0B0E11)),

        )),
        contentPadding = PaddingValues(top = 48.dp, bottom = 24.dp),
        verticalArrangement = Arrangement.spacedBy(24.dp),




    ) {
        item {

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween


            ) {
                Text(text="Songs", fontSize = 28.sp, fontWeight = FontWeight.Bold, color = Color.White, modifier = Modifier.padding(16.dp),
                    style = TextStyle(
                        shadow = Shadow(
                            color = Color.Black.copy(alpha = 0.5f),
                            offset = Offset(2f, 2f),
                            blurRadius = 6f
                        )
                    )

                )

                Button(
                    onClick = {},


                    ) {

                    Text(
                        text="Logout", color = Color.White,
                        fontSize = 20.sp,
                        fontWeight = FontWeight.Bold,
                        style = TextStyle(
                            shadow = Shadow(
                                color = Color.Black.copy(alpha = 0.5f),
                                offset = Offset(2f, 2f),
                                blurRadius = 6f
                            )
                        )

                    )

                }



            }



            Spacer(modifier = Modifier.height(20.dp))

            LazyRow(
                modifier = Modifier.fillMaxWidth(),
                contentPadding = PaddingValues(horizontal = 16.dp),
                horizontalArrangement = Arrangement.spacedBy(12.dp)

            ) {
                items(songs) { song ->
                    SongCard(song)


                }
            }

            Spacer(modifier = Modifier.height(20.dp))

            Text(text="Playlists", fontSize = 28.sp, fontWeight = FontWeight.Bold, color = Color.White, modifier = Modifier.padding(16.dp),
                style = TextStyle(
                    shadow = Shadow(
                        color = Color.Black.copy(alpha = 0.5f),
                        offset = Offset(2f, 2f),
                        blurRadius = 6f
                    )
                )
                )

            Spacer(modifier = Modifier.height(20.dp))

            LazyRow(
                contentPadding = PaddingValues(horizontal = 16.dp),
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(12.dp)

            ) {
                items(100) {
                    PlaylistCard(1)

                }
            }



        }
        }




}


