const getAppLogo = () => {
  return require('Assets/img/site-logo.png')
}

const getBrandName = () => {
  return 'Busqueda de Actas'
}

const getAppFavicon = () => {
  return require('Assets/img/favicon.ico')
}

/**
 * App Config File
 */
const AppConfig = {
   appLogo: getAppLogo(),          // App Logo
   brandName: getBrandName(),                                    // Brand Name
   favicon: getAppFavicon(),
   navCollapsed: false,                                      // Sidebar collapse
   darkMode: false,                                          // Dark Mode
   boxLayout: false,                                         // Box Layout
   rtlLayout: false,                                         // RTL Layout
   miniSidebar: false,                                       // Mini Sidebar
   enableSidebarBackgroundImage: true,                      // Enable Sidebar Background Image
   sidebarImage: require('Assets/img/sidebar-4.jpg'),     // Select sidebar image
   isDarkSidenav: true,                                   // Set true to dark sidebar
   enableThemeOptions: false,                              // Enable Theme Options
   locale: {
      languageId: 'spanish',
      locale: 'es',
      name: 'Spanish',
      icon: 'es',
   },
   enableUserTour: false, // process.env.NODE_ENV === 'production' ? true : false,  // Enable / Disable User Tour
   copyRightText: 'Quarzo © 2019 Todos los derechos reservados.',      // Copy Right Text
   // light theme colors
   themeColors: {
      'primary': '#5D92F4',
      'secondary': '#677080',
      'success': '#00D014',
      'danger': '#FF3739',
      'warning': '#FFB70F',
      'info': '#00D0BD',
      'dark': '#464D69',
      'default': '#FAFAFA',
      'greyLighten': '#A5A7B2',
      'grey': '#677080',
      'white': '#FFFFFF',
      'purple': '#896BD6',
      'yellow': '#D46B08'
   },
   // dark theme colors
   darkThemeColors: {
      darkBgColor: '#424242'
   },

   dataTableTextLabels: {
      body: {
        noMatch: "Ningun registro.",
        toolTip: "Ordenar",
      },
      pagination: {
        next: "Siguiente",
        previous: "Anterior",
        rowsPerPage: "Filas por pagina:",
        displayRows: "de",
      },
      toolbar: {
        search: "Buscar",
        downloadCsv: "Descargar CSV",
        print: "Imprimir",
        viewColumns: "Ver Columnas",
        filterTable: "Filtrar",
      },
      filter: {
        all: "Todos",
        title: "Filtros",
        reset: "Reiniciar",
      },
      viewColumns: {
        title: "Mostrar Columnas",
        titleAria: "Mostrar/Ocultar Columnas",
      },
      selectedRows: {
        text: "filas(s) seleccionadas",
        delete: "Eliminar",
        deleteAria: "Eliminar filas seleccionadas",
      },
   },
}

export default AppConfig;
