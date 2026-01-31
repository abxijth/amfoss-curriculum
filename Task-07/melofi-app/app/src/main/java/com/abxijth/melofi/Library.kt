package com.abxijth.melofi

import android.provider.MediaStore
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
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun PlaylistLikedButtonToggle(
    isPlaylist: Boolean,
    onToggle: (Boolean) -> Unit
) {

    Button(onClick = {
        onToggle(!isPlaylist)
    }) {
        if (isPlaylist) {
            Text(text = "Playlist")
        } else {
            Text(text = "Liked")
        }

    }
}

@Composable
fun PlaylistCardsLibrary() {
    LazyColumn(
        contentPadding = PaddingValues(horizontal = 16.dp),
        modifier = Modifier.fillMaxWidth(),
        verticalArrangement = Arrangement.spacedBy(12.dp)

    ) {
        items(100) {
            PlaylistCard(2)

        }
    }
    
}

@Composable
fun LikedCardsLibrary() {

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
        contentPadding = PaddingValues(horizontal = 16.dp),
        modifier = Modifier.fillMaxWidth(),
        verticalArrangement = Arrangement.spacedBy(12.dp)

    ) {
        items(songs) { song ->
            SongCard(song, mode = 2)

        }
    }

}

@Composable
fun Library() {
    var isPlaylist by remember { mutableStateOf(true) }



    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.White)
            .background(
                Brush.verticalGradient(
                    colors = listOf(
                        Color(0xFF2E3740),
                        Color(0xFF0B0E11)
                    )
                )
            ),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {

        Spacer(modifier = Modifier.height(20.dp))
        PlaylistLikedButtonToggle(
            isPlaylist = isPlaylist,
            onToggle = {isPlaylist = it}
        )

        if (isPlaylist) {
            PlaylistCardsLibrary()
            Spacer(modifier = Modifier.height(20.dp))
        } else {
            LikedCardsLibrary()
            Spacer(modifier = Modifier.height(20.dp))

        }


        





    }






}



