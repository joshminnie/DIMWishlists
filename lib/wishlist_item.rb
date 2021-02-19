# frozen_string_literal: true

# A single wishlist item. Use #to_s to generate the entry for the wishlist file.
class WishlistItem
  attr_reader :id, :perks

  def initialize(id:, perks: nil)
    @id = id
    @perks = perks
  end

  def to_s
    "dimwishlist:item=#{id}&perks=#{perks.join(',')}"
  end
end
