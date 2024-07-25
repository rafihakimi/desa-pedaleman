var config = {
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    accessToken: 'pk.eyJ1IjoicmFmaWhha2ltaSIsImEiOiJjbHlxc2V2M2kwMXp0MmlzOG5mYnNmd3VjIn0.Cjxh_h5sQdM-zsIiF1KEBg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Desa Pedaleman',
    subtitle: 'Tempat Lahirnya Ulama Terkemuka Indonesia Syekh Nawawi Al Bantani',
    headerImage: './images/logo-kkn.png',
    footerImage: './images/cropped-logo-ugm.png',
    byline: 'Oleh KKN PPM UGM Tanara Nusantara Periode 2 Tahun 2024',
    footer: 'Dibuat dengan <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template. <br> Dibuat oleh Muhammad Rafi Hakimi',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Kondisi Geografis Desa Pedaleman',
            image: './images/foto1.jpg',
            description: 'Desa Pedaleman terletak di daerah pesisir utara pulau Jawa. Desa Pedaleman merupakan Desa paling timur-laut dari Kabupaten Serang. Desa Pedaleman terletak di Kecamatan Tanara. Bagian utara Desa Pedaleman berbatasan dengan laut Jawa, dibagian selatan berbatasan dengan Desa Tanara, dibagian Timur berbatasan dengan Kabupaten Tangerang dan disebelah barat berbatasan dengan Desa Kronjo',
            location: {
                center: [106.39254, -6.02682],
                zoom: 13.38,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Kampung Halaman Tokoh Ulama',
            image: './images/foto2-1.jpg',
            description: 'Desa Pedaleman memiliki sejarah yang sangat dekat dengan salah satu ulama terkenal. Syekh Nawawi al-Bantani yang lahir pada tahun 1813 bertempat tinggal pada wilayah yang saat ini menjadi Desa Pedaleman.',
            location: {
                center: [106.38176, -6.02985],
                zoom: 16.9,
                pitch: 80,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Syekh Nawawi Al-Bantani',
            image: './images/foto3.jpg',
            description: "Syekh Nawawi al-Bantani adalah ulama besar berasal dari Desa Pedaleman Tanara, Banten. Pada umur 15 tahun beliau melaksanakan haji sekaligus menimba ilmu. Beliau merupakan salah satu ulama yang pernah menjadi Imam Masjidil Haram. Menurut K.H. Ma'ruf Amin, Syekh Nawawi memiliki berperan sebagai transmitter atau pennyambung ilmu dari ulama terdahulu ke ulama berikutnya.",
            location: {
                center: [39.82620, 21.42264],
                zoom: 15,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'centered',
            hidden: false,
            title: 'Potensi Wisata Mangrove',
            image: './images/foto4.jpg',
            description: 'Desa Pedaleman memiliki kawasan hutan mangrove yang bisa menjadi salah satu wisata yang menarik bagi para wisatawan. Namun, potensi wisata ini masih perlu dikembangkan lagi dengan diselenggarakannya akses jalan yang lebih baik.',
            location: {
                center: [106.40768, -6.01985],
                zoom: 14.6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
