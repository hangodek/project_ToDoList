package handlers

import (
	"myapp/cmd/models"
	"myapp/cmd/repositories"
	"net/http"
	"strconv"

	"github.com/labstack/echo/v4"
)

func CreateList(c echo.Context) error {
	list := models.List{}
	c.Bind(&list)
	newList, err := repositories.CreateList(list)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.JSON(http.StatusCreated, newList)
}

func ReadLists(c echo.Context) error {
	lists, err := repositories.ReadLists()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.JSON(http.StatusOK, lists)
}

func UpdateList(c echo.Context) error {
	id := c.Param("id")

	idInt, err := strconv.Atoi(id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	list := models.List{}
	c.Bind(&list)
	updatedList, err := repositories.UpdateList(list, idInt)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.JSON(http.StatusOK, updatedList)
}

func DeleteList(c echo.Context) error {
	id := c.Param("id")

	idInt, err := strconv.Atoi(id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	deletedId, err := repositories.DeleteList(idInt)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.JSON(http.StatusOK, map[string]int{"deleted_id": deletedId})
}
