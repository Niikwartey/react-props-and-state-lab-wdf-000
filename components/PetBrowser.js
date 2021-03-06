const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  render() {
    const pets = this.props.pets.map(pet => {
      return <Pet 
      pet = {{name: pet.name, type: pet.type, age: pet.age, weight: pet.weight}}
      onAdoptPet = {this.props.onAdoptPet}
      isAdopted = {this.props.adoptedPets.includes(pet.id)}
      />
    })

    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

module.exports = PetBrowser;
