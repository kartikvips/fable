export const fetchArticles = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/articles'
    });
};

export const fetchArticle = id => {
    return $.ajax({
        method: 'GET',
        url: `/api/articles/${id}`
    });
};

export const createArticle = formData => {
    return $.ajax({
        url: `api/articles`,
        method: 'POST',
        data: formData
    });
};

export const updateArticle = (formData, id) => {
    return $.ajax({
        url: `api/articles/${id}`,
        method: 'PATCH',
        data: formData
    });
};

export const deleteArticle = id => {
    return $.ajax({
        url: `api/articles/${id}`,
        method: 'DELETE'
    });
};