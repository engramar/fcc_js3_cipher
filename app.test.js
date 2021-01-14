const Cipher = require('./app')

describe('Cipher', () => {

	it('should return "FREE CODE CAMP" if input is "SERR PBQR PNZC"', () => {
		// Given
		const input = 'SERR PBQR PNZC'
		const expected = 'FREE CODE CAMP'
		
		// When
		const result = Cipher(input) 
		
		// Then
		expect(expected).toBe(result)
	});

	it('should return "FREE PIZZA!" if input is "SERR CVMMN!"', () => {
		// Given
		const input = 'SERR CVMMN!'
		const expected = 'FREE PIZZA!'
		
		// When
		const result = Cipher(input) 
		
		// Then
		expect(expected).toBe(result)
	});

	it('should return "FREE LOVE?" if input is "SERR YBIR?"', () => {
		// Given
		const input = 'SERR YBIR?'
		const expected = 'FREE LOVE?'
		
		// When
		const result = Cipher(input) 
		
		// Then
		expect(expected).toBe(result)
	});
	
	it('should return "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG." if input is "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."', () => {
		// Given
		const input = 'GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.'
		const expected = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.'
		
		// When
		const result = Cipher(input) 
		
		// Then
		expect(expected).toBe(result)
	});

});