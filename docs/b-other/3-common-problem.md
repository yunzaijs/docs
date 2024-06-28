---
sidebar_position: 3
---

# 常见问题


## 无头浏览器

较进版本的`puppeteer`要求最低`Node.js V16.14.0`

若发现相关异常，请检查是否Node版本是否符合预期

若ARM架构寻找不到浏览器，请尝试使用命令行校验是否拥有无头浏览器

## 依赖库 

```sh
yum install pango.x86_64 libXcomposite.x86_64 libXcursor.x86_64 libXdamage.x86_64 libXext.x86_64 libXi.x86_64 libXtst.x86_64 cups-libs.x86_64 libXScrnSaver.x86_64 libXrandr.x86_64 GConf2.x86_64 alsa-lib.x86_64 atk.x86_64 gtk3.x86_64 -y
```

## 乱码字体

```sh
yum groupinstall fonts -y
```

## "CXXABI_1.3.8" not found 

下载 [libstdc++.so.6.0.29.zip](https://baiyin1314.lanzouq.com/i8Nr21ig8hyf) 将 **解压缩后** 的文件放在/usr/lib64/中

```sh
cd /usr/lib64/
```
 
```sh
sudo mv libstdc++.so.6 libstdc++.so.6.bak
```

```sh
sudo ln -s libstdc++.so.6.0.29 libstdc++.so.6
```