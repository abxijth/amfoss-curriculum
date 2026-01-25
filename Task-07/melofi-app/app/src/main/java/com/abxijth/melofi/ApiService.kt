package com.abxijth.melofi

import retrofit2.http.GET

interface ApiService {

    @GET("getSongs")
    suspend fun getSongs(): List<SongData>
}
