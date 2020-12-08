# lipbcu.love网关

lipbcu.love域名下的网站的网关，包括以下功能：
* 采用nginx托管一些静态网站
* 采用certbot自动获取通配符证书
* 反向代理其他服务

## 目录结构

| 目录 | 说明 |
|------|------|
| certbot | certbot相关文件，除包含cloudflare的配置，其余问卷有certbot生成，并映射到nginx |
| conf.d  | nginx站点配置文件 |
| sites   | 托管的静态网站，每个网站一个文件夹 |


## 部署

* 安装docker & docker-compose & 配置镜像加速
* 配置cloudflare token用于certbot获取证书
* init-cert.sh
* docker-compose up -d

