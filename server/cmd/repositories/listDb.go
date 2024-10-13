package repositories

import (
	"myapp/cmd/models"
	"myapp/cmd/storage"
	"time"
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

func ReadLists() ([]models.List, error) {
	db := storage.GetDB()

	rows, err := db.Query("SELECT id, text, checked, created_at, updated_at FROM todolist")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	lists := []models.List{}

	for rows.Next() {
		list := models.List{}
		err := rows.Scan(&list.Id, &list.Text, &list.Checked, &list.CreatedAt, &list.UpdatedAt)
		if err != nil {
			return nil, err
		}
		lists = append(lists, list)
	}

	return lists, nil
}

func UpdateList(list models.List, id int) (models.List, error) {
	db := storage.GetDB()
	sqlStatement := `
	UPDATE todolist
	SET text = $2, updated_at = $3
	WHERE id = $1
	RETURNING id`
	err := db.QueryRow(sqlStatement, id, list.Text, time.Now()).Scan(&list.Id)
	if err != nil {
		return models.List{}, err
	}
	list.Id = id
	return list, nil
}

func DeleteList(id int) (int, error) {
	db := storage.GetDB()
	sqlStatement := `DELETE FROM todolist WHERE id = $1 RETURNING id`
	var deletedId int
	err := db.QueryRow(sqlStatement, id).Scan(&deletedId)
	if err != nil {
		return 0, err
	}
	return deletedId, nil
}
