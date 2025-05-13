# **Elasticsearch 基本语法指南**

Elasticsearch (ES) 是一个基于 Lucene 的分布式搜索和分析引擎，常用于全文检索、日志分析和大数据处理。以下是其核心语法和常见操作：

------

## **1. 索引管理**

### **创建索引**

```plain
PUT /索引名
{
  "settings": {
    "number_of_shards": 3,
    "number_of_replicas": 1
  },
  "mappings": {
    "properties": {
      "字段1": { "type": "text" },
      "字段2": { "type": "keyword" },
      "字段3": { "type": "integer" }
    }
  }
}
```

- `**number_of_shards**`：分片数（默认 1）
- `**number_of_replicas**`：副本数（默认 1）

### **查看索引信息**

GET /索引名

### **删除索引**

DELETE /索引名

------

## **2. 文档操作**

### **添加/更新文档**

```plain
POST /索引名/_doc/文档ID
{
  "字段1": "值1",
  "字段2": "值2"
}
```

- 不指定 `**文档ID**` 时，ES 会自动生成。

### **获取文档**

GET /索引名/_doc/文档ID

### **删除文档**

DELETE /索引名/_doc/文档ID

### **批量操作（Bulk API）**

```plain
POST /_bulk
{ "index": { "_index": "索引名", "_id": "1" } }
{ "字段1": "值1", "字段2": "值2" }
{ "delete": { "_index": "索引名", "_id": "2" } }
```

------

## **3. 查询数据**

### **简单查询（Match Query）**

```plain
GET /索引名/_search
{
  "query": {
    "match": {
      "字段名": "搜索词"
    }
  }
}
```

### **精确匹配（Term Query）**

```plain
GET /索引名/_search
{
  "query": {
    "term": {
      "字段名": "精确值"
    }
  }
}
```

### **范围查询（Range Query）**

```plain
GET /索引名/_search
{
  "query": {
    "range": {
      "数值字段": {
        "gte": 10,
        "lte": 20
      }
    }
  }
}
```

### **布尔查询（Bool Query）**



```plain
GET /索引名/_search
{
  "query": {
    "bool": {
      "must": [ { "match": { "字段1": "A" } } ],
      "should": [ { "match": { "字段2": "B" } } ],
      "must_not": [ { "range": { "字段3": { "lte": 10 } } } ]
    }
  }
}
```

- `**must**`：必须匹配（AND）
- `**should**`：应该匹配（OR）
- `**must_not**`：必须不匹配（NOT）

### **聚合查询（Aggregation）**

```plain
GET /索引名/_search
{
  "aggs": {
    "聚合名称": {
      "terms": { "field": "字段名" }
    }
  }
}
```

------

## **4. 常用过滤**

### **分页查询**

```plain
GET /索引名/_search
{
  "from": 0,
  "size": 10,
  "query": { "match_all": {} }
}
```

- `**from**`：起始位置
- `**size**`：每页数量

### **排序**

```plain
GET /索引名/_search
{
  "sort": [
    { "字段名": { "order": "asc" } }
  ]
}
```

### **高亮显示**

```plain
GET /索引名/_search
{
  "query": { "match": { "字段名": "搜索词" } },
  "highlight": {
    "fields": { "字段名": {} }
  }
}
```

------

## **5. 索引别名**

### **创建别名**

```plain
POST /_aliases
{
  "actions": [
    { "add": { "index": "索引名", "alias": "别名" } }
  ]
}
```

### **切换别名（零停机时间）**

```plain
POST /_aliases
{
  "actions": [
    { "remove": { "index": "旧索引", "alias": "别名" } },
    { "add": { "index": "新索引", "alias": "别名" } }
  ]
}
```

------

## **6. 集群管理**

### **查看集群健康状态**

GET /_cluster/health

### **查看节点信息**

GET /_cat/nodes?v

### **查看索引状态**

GET /_cat/indices?v

------

## **总结**

| **操作类型**  | **示例**                                           |
| ------------- | -------------------------------------------------- |
| **索引管理**  | `**PUT /索引名**`, `**DELETE /索引名**`            |
| **文档操作**  | `**POST /索引名/_doc**`, `**GET /索引名/_doc/ID**` |
| **查询**      | `**match**`, `**term**`, `**bool**`, `**range**`   |
| **聚合**      | `**aggs**`                                         |
| **分页/排序** | `**from**`, `**size**`, `**sort**`                 |
| **高亮**      | `**highlight**`                                    |
| **别名**      | `**POST /_aliases**`                               |
| **集群管理**  | `**GET /_cluster/health**`                         |

如果你有特定的 Elasticsearch 使用场景，可以告诉我，我会提供更详细的示例！ 🚀