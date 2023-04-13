# beforeSearch

## 简介

插件为manifest v3版本开发，使用了vue3+element-plus

最终预期实现功能包括多种编码转换，资产测绘，指纹识别，前端敏感信息发现，信息搜集，等等，后续可能会增加更多功能。

## 使用方式

下载release新版本，将解压后的dist文件夹拖入到谷歌浏览器插件页面即可

![img](img/9A73F836-4011-4F19-9E3E-7C2786FD1EB2.png)

后期功能丰富后打算尝试上线谷歌商店。

## 更新及功能

### 2023.4.6

实现编码转换功能，包括base64编码解码，url编码解码，md5加密，unicode编码解码，hex编码解码。

![img](img/C102C973-63E1-47B8-B8FE-56F98882642A.png)

### 2023.4.10

增加fofa查询功能，配置email和apikey后调用fofa官方api进行查询资产

![img](img/24EE87F3-545F-4346-A652-9ECB435F4DB1.png)

### 2023.4.11

完成fofa查询，可根据语句进行查询

![img](img/7F584117-7397-4EE0-8283-9021F8608341.png)

### 2023.4.13

完成hunter查询，配置apikey后可调用官方api查询

![img](img/A9EC28D4-E2A0-41F7-945C-BE9FB030FEF9.png)

![img](img/99B5105B-7FF5-44B0-A423-37A8FF5FF72C.png)