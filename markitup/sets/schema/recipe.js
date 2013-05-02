var mySettings = {
	onShiftEnter:  	{keepDefault:false, replaceWith:'<br />\n'},
	onCtrlEnter:  	{keepDefault:false, openWith:'\n<p>', closeWith:'</p>'},
	onTab:    		{keepDefault:false, replaceWith:'    '},
	markupSet:  [ 	
		{name:'Cooking Method', key:'M', openWith:'<span itemprop="cookingMethod">', closeWith:'</span>' },
		{name:'Cook Time', key:'T', openWith:'<meta itemprop="cookTime" content="PT15M">', closeWith:''  },
		{name:'Ingredients', key:'I', openWith:'<span itemprop="ingredients">', closeWith:'</span>'  },
		{name:'Nutrition', key:'N', openWith:'<div itemprop="nutrition" itemscope itemtype="http://schema.org/NutritionInformation">', closeWith:'</div>'  },
		{name:'Prep Time', key:'P', openWith:'<meta itemprop="prepTime" content="PT15M">', closeWith:''  },
		{name:'Recipe Category', key:'C', openWith:'<span itemprop="recipeCategory">', closeWith:'</span>'  },
		{name:'Recipe Cuisine', key:'U', openWith:'<span itemprop="recipeCategory">', closeWith:'</span>'  },
		{name:'Recipe Instructions', key:'S', openWith:'<span itemprop="recipeInstructions">', closeWith:'</span>'  },
		{name:'Recipe Yield', key:'Y', openWith:'<span itemprop="recipeYield">', closeWith:'</span>'  },
		{name:'Total Time', key:'E', openWith:'<meta itemprop="totalTime" content="PT1H">', closeWith:''  },
		{name:'Recipe', key:'R', openWith:'<div itemscope itemtype="http://schema.org/Recipe">', closeWith:'</div>'  },

		{name:'Strip', className:'strip', replaceWith:function(markitup) { return markitup.selection.replace(/<(.*?)>/g, "") } },		
		{name:'Preview', className:'preview',  call:'preview'}
	]
}
