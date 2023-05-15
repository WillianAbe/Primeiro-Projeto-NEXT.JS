//comportamento geral do next 
module.exports = {
    trailingSlash: true,
    async redirects(){
        return[
            {
            source: '/perguntas',
            destination: '/faq/',
            permanent: true,
            },
        ]
    },
}