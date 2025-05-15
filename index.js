      // Categorias SFW disponíveis no waifu.pics
        const categories = [
            'waifu', 'neko', 'shinobu', 'megumin', 
            'awoo', 'smug', 'bonk', 'blush'
        ];
        
        // Função para carregar uma imagem aleatória
        async function getRandomWaifuImage() {
            try {
                // Escolhe uma categoria aleatória
                const randomCategory = categories[Math.floor(Math.random() * categories.length)];
                
                const response = await fetch(`https://api.waifu.pics/sfw/${randomCategory}`);
                const data = await response.json();
                return data.url;
            } catch (error) {
                console.error("Erro ao buscar imagem:", error);
                // Retorna uma imagem padrão em caso de erro
                return 'https://i.imgur.com/8km7W0w.jpg';
            }
        }
        
        // Função para mudar o plano de fundo
        async function changeBackground() {
            const imageUrl = await getRandomWaifuImage();
            
            // Aplica a imagem como fundo do body
            document.body.style.backgroundImage = `url('${imageUrl}')`;
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundAttachment = 'fixed';
            document.body.style.backgroundRepeat = 'no-repeat';
            
            // Armazena a URL atual para não repetir na próxima vez
            localStorage.setItem('lastBackground', imageUrl);
        }
        
        // Carrega uma imagem quando a página é aberta
        window.onload = async function() {
            // Verifica se já tem uma imagem salva
            const lastBackground = localStorage.getItem('lastBackground');
            
            if (lastBackground) {
                // Usa a imagem anterior enquanto carrega uma nova
                document.body.style.backgroundImage = `url('${lastBackground}')`;
                document.body.style.backgroundSize = 'cover';
                document.body.style.backgroundPosition = 'center';
                document.body.style.backgroundAttachment = 'fixed';
            }
            
            // Carrega uma nova imagem
            await changeBackground();
        };