import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

export default ({ mode }) =>
  defineConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        'comps': path.resolve(__dirname, 'src/components'),
        'styles': path.resolve(__dirname, 'src/styles'),
        'views': path.resolve(__dirname, 'src/views'),
        'utils': path.resolve(__dirname, 'src/utils'),
        'routes': path.resolve(__dirname, 'src/router'),
      },
      extensions: ['.vue', '.js', '.ts', '.json'],
    },
    base: mode === 'development' ? './' : mode === 'beta' ? './' : './', // 配置静态资源路径，由于不区分环境就写死了
    plugins: [vue()],
    server: {
      proxy: {
        // 代理
        '/geoapi': {
          target: 'https://geoapi.qweather.com/v2',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/geoapi/, ''),
        },
        '/weather': {
          target: 'https://devapi.qweather.com/v7/weather',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/weather/, ''),
        },
        '/indices': {
          target: 'https://devapi.qweather.com/v7/indices',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/indices/, ''),
        },
        '/warning': {
          target: 'https://devapi.qweather.com/v7/warning',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/warning/, ''),
        },
        '/air': {
          target: 'https://devapi.qweather.com/v7/air',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/air/, ''),
        },
        '/historical': {
          target: 'https://datasetapi.qweather.com/v7/historical',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/historical/, ''),
        },
      },
    },
  })
