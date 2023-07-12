import Image from '@/shared/assets/tests/storybook.jpg';
import { ArticlesPageSchema } from '../types/articlesPage';
import { articlesPageActions, articlesPageReducer } from './articlesPageSlice';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { Article, ArticleView } from '@/entities/Article';
import { LOCAL_STORAGE_ARTICLE_VIEW_KEY } from '@/shared/const/localStorage';

const articles: Article[] = [
	{
		id: '1',
		title: 'Javascript news СВЕЖАЯ',
		subtitle: 'Что нового в JS за 2022 год?',
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png',
		views: 1022,
		createdAt: '26.04.2022',
		userId: '1',
		type: ['IT'],
		user: {
			username: 'Autor',
			avatar: Image,
		},
		blocks: [
			{
				id: '1',
				type: 'TEXT',
				title: 'Заголовок этого блока',
				paragraphs: [
					'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
					'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
					'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
				],
			},
			{
				id: '4',
				type: 'CODE',
				code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
			},
			{
				id: '5',
				type: 'TEXT',
				title: 'Заголовок этого блока',
				paragraphs: [
					'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
					'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
				],
			},
			{
				id: '2',
				type: 'IMAGE',
				src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
				title: 'Рисунок 1 - скриншот сайта',
			},
			{
				id: '3',
				type: 'CODE',
				code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
			},
			{
				id: '7',
				type: 'TEXT',
				title: 'Заголовок этого блока',
				paragraphs: [
					'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
					'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
				],
			},
			{
				id: '8',
				type: 'IMAGE',
				src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
				title: 'Рисунок 1 - скриншот сайта',
			},
			{
				id: '9',
				type: 'TEXT',
				title: 'Заголовок этого блока',
				paragraphs: [
					'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
				],
			},
		],
	},
	{
		id: '2',
		title: 'Python news',
		subtitle: 'Что нового в JS за 2022 год?',
		img: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/113415626/original/a17667d573bf34559bf0d35993ed76e57d43ad00/program-python-scripts-for-automation-and-data-mining.png',
		views: 5204,
		createdAt: '26.02.2022',
		userId: '1',
		type: ['IT'],
		user: {
			username: 'Autor',
			avatar: Image,
		},
		blocks: [
			{
				id: '1',
				type: 'TEXT',
				title: 'Заголовок этого блока',
				paragraphs: [
					'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
					'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
					'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
				],
			},
		],
	},
	{
		id: '3',
		title: 'Kotlin news 2019',
		subtitle: 'Что нового в JS за 2022 год?',
		img: 'https://yandex-images.clstorage.net/Upu4M9251/2810ee_Y/oUYWPAm_e3Yd9FhOoKR27__5zM7eT2WTpQTr3CMITeJE--ExD6jpHZMyhqR43zT4vGX-7NDernrb0OAREkzbCWQHM6jdez93qEEcDyXk9t-v2Bka716gM-DVT_nj_A0ysX6kEGooXYhjNjeELeySnzsCXXu2iQxYLATlUdeMyqiwdiXeva8JECwnKnkD5pSfLekJbXyfghHD9RkJEr14cNYpE8b62j6_oeeFk8ufE615U92YZRlcSk-1BGIGTIuMYkUXLEqceNHONnva0WaFPh8oOw8uvgBgsBXoCGM_OPAm6hNlGAoP3FFXdmLr3lIuCVFe6tQ5vuoNpRVjpv65PmBFtP0Z7IqCvqY4S9A0Ns8_COmOX05R0UCGC2tDraoglInhhphYLf5CFfZg6E-RnUvRDnu2ux1rvpYXkDecyCwiNmesGd9LIl2265qDpWYdbVqbTxzswMICZRg48A-qopWKEdYYecy_M5YmocgewO9b4r2oN_tNSq-2duIk7aitYBeUTfjtWMI8JRsLwXV07a05alxc3tIRg7Y4yvAsCBM2WRGHm7i__wI19pBoXkN9y_H9-WXrvVj8lhex9W37X0GXxh9b7njhzAS62eIGxz2PagqMTSwwMaAEqArjb2jj9BgSJYoJ789jlySSWd8iflmynevHCuyqDqTkQ3Rdy5wy12duKS5q4cwEy8gRlLTd7Ck7bM8vUiOwNLo6w2xa01fqEqa4eiytQZVnsxotEj3ZUewrJPifG4y1hEJlv5g_AaQ0bCs--TBtNxpZE9cGLZ36KawfT6GSokUquSCPWvCl63J3euoOPKIW1bCIvSANSDEuafQLHDquVUZgF_yKfXH2BQ3ZfXoBf8Q7WNOm5T3OiAk_T3yRkWAWidsQf2uxBdsRNsioH5-hVwWwW95Q_igS3kvXid77r9Z1YqT-e49R9fW-2KxrM4-2avvCNHbs3otZHm6NsEJyZAnoUY95A',
		views: 94002,
		createdAt: '26.02.2019',
		userId: '1',
		type: ['IT'],
		user: {
			username: 'Autor',
			avatar: Image,
		},
		blocks: [
			{
				id: '1',
				type: 'TEXT',
				title: 'Заголовок этого блока',
				paragraphs: [
					'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
					'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
					'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
				],
			},
		],
	},
];

describe('articlesPageSlice.test', () => {
	test('fetchArticlesList pending', () => {
		const state: DeepPartial<ArticlesPageSchema> = {
			error: 'error',
			isLoading: false,
		};
		const expects = {
			error: undefined,
			isLoading: true,
		};
		expect(articlesPageReducer(state as ArticlesPageSchema, fetchArticlesList.pending)).toEqual(
			expects
		);
	});
	test('fetchArticlesList fulfilled', () => {
		const state: DeepPartial<ArticlesPageSchema> = {
			isLoading: true,
		};
		const payload: Article[] = articles;
		const expects: DeepPartial<ArticlesPageSchema> = {
			isLoading: false,
			ids: ['1', '2', '3'],
			entities: {
				'1': articles[0],
				'2': articles[1],
				'3': articles[2],
			},
		};
		expect(
			articlesPageReducer(state as ArticlesPageSchema, fetchArticlesList.fulfilled(payload, ''))
		).toEqual(expects);
	});
	test('fetchArticlesList rejected', () => {
		const state: DeepPartial<ArticlesPageSchema> = {
			isLoading: true,
			error: undefined,
		};
		const expects: DeepPartial<ArticlesPageSchema> = {
			error: 'error',
			isLoading: false,
		};
		expect(
			articlesPageReducer(
				state as ArticlesPageSchema,
				fetchArticlesList.rejected(null, '', undefined, 'error')
			)
		).toEqual(expects);
	});

	test('setView from LIST to TILE', () => {
		const state: DeepPartial<ArticlesPageSchema> = {
			view: 'LIST',
		};
		const payload: ArticleView = 'TILE';
		const expects: DeepPartial<ArticlesPageSchema> = {
			view: payload,
		};
		expect(
			articlesPageReducer(state as ArticlesPageSchema, articlesPageActions.setView(payload))
		).toEqual(expects);
	});
	test('setView from TILE to LIST', () => {
		const state: DeepPartial<ArticlesPageSchema> = {
			view: 'TILE',
		};
		const payload: ArticleView = 'LIST';
		const expects: DeepPartial<ArticlesPageSchema> = {
			view: payload,
		};
		expect(
			articlesPageReducer(state as ArticlesPageSchema, articlesPageActions.setView(payload))
		).toEqual(expects);
	});
	test('initState', () => {
		const state: DeepPartial<ArticlesPageSchema> = {
			view: 'TILE',
		};
		localStorage.setItem(LOCAL_STORAGE_ARTICLE_VIEW_KEY, 'LIST');
		const expects: DeepPartial<ArticlesPageSchema> = {
			view: 'LIST',
		};
		expect(articlesPageReducer(state as ArticlesPageSchema, articlesPageActions.initState())).toEqual(
			expects
		);
		expect(localStorage.getItem(LOCAL_STORAGE_ARTICLE_VIEW_KEY)).toEqual('LIST');
	});
});
