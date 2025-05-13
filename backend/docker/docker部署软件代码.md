# docker部署软件代码

### 安装mysql

```plain
docker run \
--name mysql \
-d \
-p 3306:3306 \
-v /root/mysql/log:/var/log/mysql \
-v /root/mysql/data:/var/lib/mysql \
-v /root/mysql/conf:/etc/mysql/conf.d \
-v /root/mysql/init:/docker-entrypoint-initdb.d \
-e MYSQL_ROOT_PASSWORD=a9b8c7ljf@123 \
mysql:8.4
```

### 安装rabbitMQ

```plain
docker run \
 -e RABBITMQ_DEFAULT_USER=garfield \
 -e RABBITMQ_DEFAULT_PASS=mqofgarfield123 \
 -v mq-plugins:/plugins \
 --name mq \
 --hostname mq \
 -p 15672:15672 \
 -p 5672:5672 \
 -d \
 rabbitmq:latest
docker run \
 -e RABBITMQ_DEFAULT_USER=garfield \
 -e RABBITMQ_DEFAULT_PASS=mqofgarfield123 \
 -v mq-plugins:/plugins \
 --name mq \
 --hostname mq \
 -p 15672:15672 \
 -p 5672:5672 \
 -d \
 rabbitmq:3.8-management
```

### 安装redis

```plain
docker run \
--restart=always \
--log-opt max-size=100m \
--log-opt max-file=2 \
-p 6379:6379 \
--name redis \
-v /root/redis/conf/redis.conf:/etc/redis/redis.conf  \
-v /root/redis/data:/data \
-d redis:6.2.6 redis-server /etc/redis/redis.conf \
--appendonly yes \
--requirepass "redisofgarfield"
```

### 安装elasticsearch

```plain
docker run -d \
  --name es \
  -e "ES_JAVA_OPTS=-Xms512m -Xmx512m" \
  -e "discovery.type=single-node" \
  -v es-data:/usr/share/elasticsearch/data \
  -v es-plugins:/usr/share/elasticsearch/plugins \
  --privileged \
  -p 9200:9200 \
  -p 9300:9300 \
  elasticsearch:7.17.28
```

#### 安装kibana

```plain
docker run -d \
--name kibana \
-e ELASTICSEARCH_HOSTS=http://47.107.29.188:9200 \
-p 5601:5601  \
kibana:7.17.28
```



```plain
docker exec -it es ./bin/elasticsearch-plugin  install https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.17.28/elasticsearch-analysis-ik-7.17.28.zip
```

