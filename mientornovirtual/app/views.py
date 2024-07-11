from flask import jsonify, request
from app.models import Pizza

def index():
    return jsonify({'message': 'Hola mundo API pizzas'})

def create_pizza():
    data = request.json
    new_pizza = Pizza(title=data['title'], description=data['description'], banner=data['banner'])
    new_pizza.save()
    return jsonify({'message': 'Pizza creada exitosamente'}), 201

def get_all_pizzas():
    pizzas = Pizza.get_all()
    return jsonify([pizza.serialize() for pizza in pizzas])

def get_pizza(pizza_id):
    pizza = Pizza.get_by_id(pizza_id)
    if not pizza:
        return jsonify({'message': 'Pizza no encontrada'}), 404
    return jsonify(pizza.serialize())

def update_pizza(pizza_id):
    pizza = Pizza.get_by_id(pizza_id)
    if not pizza:
        return jsonify({'message': 'Pizza no encontrada'}), 404
    data = request.json
    pizza.title = data['title']
    pizza.description = data['description']
    pizza.banner = data['banner']
    pizza.save()
    return jsonify({'message': 'Pizza actualizada exitosamente'})

def delete_pizza(pizza_id):
    pizza = Pizza.get_by_id(pizza_id)
    if not pizza:
        return jsonify({'message': 'Pizza no encontrada'}), 404
    pizza.delete()
    return jsonify({'message': 'Pizza eliminada'})