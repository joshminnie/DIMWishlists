# frozen_string_literal: true

# Used by bin/permute to build out permutations of Wishlist items.
class Wishlist
  attr_reader :id, :name, :items

  def initialize(id:, name: nil)
    @id = id
    @name = name
  end

  def permute(slot1_values: [], slot2_values: [], slot3_values: [], slot4_values: [])
    perks = [slot1_values, slot2_values, slot3_values, slot4_values].map(&:compact).reject(&:empty?)

    @items = perks[0].product(*perks.drop(1)).map do |perk|
      WishlistItem.new(id: id, perks: perk)
    end
  end

  def to_s
    output = +""

    output << "// #{name}\n" if name
    output << items.map(&:to_s).join("\n") << "\n" if items

    output
  end
end
