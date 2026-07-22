# Backup and Disaster Recovery Strategy

## 1. Point-In-Time Recovery (PITR)
- Enable Write-Ahead Logging (`WAL`) archiving to AWS S3 / GCP GCS.
- Daily full database dumps using `pg_dump` compressed format (`.dump`).

## 2. Backup Command
```bash
pg_dump -h localhost -U postgres -F c -b -v -f "factoryos_backup_$(date +%Y%m%d_%H%M%S).dump" factoryos_db
```

## 3. Restore Command
```bash
pg_restore -h localhost -U postgres -d factoryos_db -v "factoryos_backup_timestamp.dump"
```
