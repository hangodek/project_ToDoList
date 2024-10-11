package repositories

import (
	"myapp/cmd/models"
	"myapp/cmd/storage"
)

func CreateList(list models.List) (models.List, error) {
	db := storage.GetDB()
	sqlStatement := `INSERT INTO todolist (text, created_at, updated_at) VALUES ($1, NOW(), NOW()) RETURNING id`
	err := db.QueryRow(sqlStatement, list.Text).Scan(&list.Id)

	if err != nil {
		return list, err
	}
	return list, err
}
