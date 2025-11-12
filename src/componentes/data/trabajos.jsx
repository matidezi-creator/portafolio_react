const trabajos = [
	{
		id: 1,
		categoria: 'desarrollo-web',
		thumb: {
			url: './assets/trabajos/pizzeria.png',
			alt: 'Pizzería Básico Paz',
		},
		info: {
			nombre: 'Pizzería Básico Paz',
			categoria: 'Desarrollo Web',
			contenido: (
				<>
					<p>
						<a 
							href="https://pizzeria-basico-paz.vercel.app/" 
							target="_blank" 
							rel="noopener noreferrer"
							style={{
								display: 'inline-block',
								marginBottom: '1rem',
								color: '#3fb4ff',
								fontWeight: '600',
								textDecoration: 'none',
							}}
						>
							🔗 Ver sitio web
						</a>
					</p>

					<p>
						Sitio web desarrollado como homenaje al espíritu italiano y la pasión por la buena pizza.  
						Un diseño cálido y artesanal inspirado en las pizzerías clásicas del sur de Italia, pensado para ofrecer
						una experiencia cercana, visualmente atractiva y fácil de navegar desde cualquier dispositivo.
					</p>

					<img loading="lazy" src="./assets/trabajos/pizza2.png" alt="Vista previa del sitio Pizzería Básico Paz" />

					<p>
						El sitio incluye una sección de menú con precios, galería fotográfica de productos y locales, además de
						información de contacto y sucursales. Todo acompañado por una paleta de tonos cálidos y una tipografía
						tradicional que refuerza la identidad italiana del proyecto.
					</p>

					<img loading="lazy" src="./assets/trabajos/pizza4.png" alt="Diseño responsivo del sitio Pizzería Básico Paz" />

					<p>
						<b>Tecnologías utilizadas:</b> <br />
						• Vite – entorno de desarrollo rápido y modular. <br />
						• Tailwind CSS – maquetación moderna y adaptable. <br />
						• JavaScript – interactividad y comportamiento dinámico. <br />
					</p>

					<p>
						El resultado final es un sitio moderno, responsive y visualmente atractivo, ideal para negocios
						gastronómicos que buscan transmitir autenticidad y tradición con una presencia digital sólida.
					</p>
				</>
			),
		},
	},
	{
		id: 2,
		categoria: 'desarrollo-web',
		thumb: {
			url: './assets/trabajos/cafe.png',
			alt: 'Cafè L’Antic & Nou',
		},
		info: {
			nombre: 'Cafè L’Antic & Nou',
			categoria: 'Desarrollo Web',
			contenido: (
				<>
					<p>
						<a 
							href="https://cafe-lantic-nou.vercel.app/" 
							target="_blank" 
							rel="noopener noreferrer"
							style={{
								display: 'inline-block',
								marginBottom: '1rem',
								color: '#3fb4ff',
								fontWeight: '600',
								textDecoration: 'none',
							}}
						>
							🔗 Ver sitio web
						</a>
					</p>

					<p>
						Sitio web desarrollado para un café clásico con esencia artesanal y diseño moderno.  
						Una experiencia visual cálida y minimalista que fusiona lo tradicional con lo contemporáneo,
						reforzando la identidad del local a través de su estética y estructura.
					</p>

					<img loading="lazy" src="./assets/trabajos/cafe1.jpg" alt="Vista previa del sitio Cafè L’Antic & Nou" />

					<p>
						El proyecto se centra en transmitir la calidez del café mediante una interfaz simple, tipografía amable
						y colores suaves. Cuenta con secciones bien definidas: menú, galería, ubicación y contacto — todo pensado
						para ofrecer una navegación clara y fluida desde cualquier dispositivo.
					</p>

					<img loading="lazy" src="./assets/trabajos/cafe2.jpg" alt="Diseño responsive del sitio Cafè L’Antic & Nou" />

					<p>
						<b>Tecnologías utilizadas:</b><br />
						• React + Vite – desarrollo moderno y optimizado. <br />
						• Tailwind CSS – diseño responsivo y minimalista. <br />
						• JavaScript – interactividad y manejo dinámico. <br />
					</p>

					<p>
						El resultado final es un sitio visualmente armonioso y funcional, ideal para negocios locales que
						buscan transmitir autenticidad y profesionalismo en su presencia online.
					</p>
				</>
			),
		},
	},
	{
	id: 3,
	categoria: 'diseño-web',
	thumb: {
		url: './assets/trabajos/trace.png',
		alt: 'Startup Trace',
	},
	info: {
		nombre: 'Startup Trace',
		categoria: 'Diseño Web',
		contenido: (
			<>
				<p>
					<a 
						href="https://startup-trace.vercel.app/" 
						target="_blank" 
						rel="noopener noreferrer"
						style={{
							display: 'inline-block',
							marginBottom: '1rem',
							color: '#3fb4ff',
							fontWeight: '600',
							textDecoration: 'none',
						}}
					>
						🔗 Ver sitio web
					</a>
				</p>

				<p>
					Landing page moderna creada para una startup tecnológica enfocada en productividad.  
					El sitio busca presentar de forma clara las características, precios y beneficios de la aplicación
					mediante un diseño limpio, profesional y centrado en la conversión.
				</p>

				<img loading="lazy" src="./assets/trabajos/1.png" alt="Vista previa del sitio Startup Trace" />

				<p>
					El proyecto fue desarrollado como práctica de diseño web, priorizando la organización del contenido, el uso de
					secciones visualmente equilibradas y una estructura adaptable a distintos dispositivos.
					Se aplicaron principios modernos de UI/UX para mejorar la legibilidad y experiencia del usuario.
				</p>

				<img loading="lazy" src="./assets/trabajos/apps-2.png" alt="Sección de precios de Startup Trace" />

				<p>
					<b>Tecnologías utilizadas:</b><br />
					• HTML5 – estructura semántica y accesible. <br />
					• CSS3 – maquetación moderna con Flexbox y Grid. <br />
					• JavaScript – animaciones e interactividad dinámica. <br />
					• Vite – entorno de desarrollo rápido y optimizado. <br />
				</p>

				<p>
					El resultado final es una landing page elegante, moderna y funcional, ideal para startups o proyectos
					personales que busquen una presentación clara, profesional y adaptable.
				</p>
			</>
		),
	},
	}

];

export default trabajos;


