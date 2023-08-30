export const config = {
    server:{
        port:8080,
        secretSession:"claveSecretaSessions"
    },
    mongo:{
        url:"mongodb+srv://mauroscubilla:martiniracing2000@cluster0.sxupgx7.mongodb.net/logindb?retryWrites=true&w=majority"
    },
    github:{
        clientId:"Iv1.5439aaba78c031a4",
        clienteSecret:"312c5b1f9f9129686b3eeb8ea5363f15601ceb2b",
        callbackUrl:"http://localhost:8080/api/sessions/github-callback"
    }
}