$(function () {
    $.getJSON("js/images.json", function (data) {
        $.each(data.healthy_kitchen_council, function (i, hkc) {
            var hkc_image_data = `<div role="listitem" class="grid_item w-dyn-item">
                                        <a
                                            id="w-node-_058f6aaf-86c3-1d0c-2ab0-d1fdd69ead04-e53849ae"
                                            data-w-id="058f6aaf-86c3-1d0c-2ab0-d1fdd69ead04"
                                            href="#"
                                            class="image_icon_play council_grid w-inline-block"
                                        >
                                            <img
                                                src="images/pngaaa.com-177719.png"
                                                loading="lazy"
                                                sizes="100vw"
                                                srcset="
                                                    images/pngaaa.com-177719-p-500.png  500w,
                                                    images/pngaaa.com-177719.png       1025w
                                                "
                                                alt=""
                                                class="image-8"
                                            />
                                        </a>
                                        <a
                                            id="w-node-_654c9179-ae6c-a599-3830-2964bcfd5f72-e53849ae"
                                            data-w-id="654c9179-ae6c-a599-3830-2964bcfd5f72"
                                            href="#"
                                            class="grid_element w-inline-block"
                                        >
                                            <div class="div-block-6">
                                                <h5 class="heading s blue">${hkc.council_member_name} ${hkc.title}</h5>
                                            </div>
                                            <img
                                                src="${hkc.image}"
                                                loading="lazy"
                                                alt=""
                                                class="grid_img"
                                            />
                                        </a>
                                    </div>`;

            $("#hkc_image").append(hkc_image_data);
        });
        $.each(data.appliances, function (i, appliance) {
            var appliance_image_data = `<div role="listitem" class="grid_item w-dyn-item">
                                        <a
                                            id="w-node-_670e098e-af47-a036-38b9-069d5ec1f935-e53849ae"
                                            data-w-id="670e098e-af47-a036-38b9-069d5ec1f935"
                                            href="#"
                                            class="grid_element w-inline-block"
                                            ><img
                                                src="${appliance.image}"
                                                loading="lazy"
                                                alt=""
                                                class="grid_img"
                                            />
                                            <div class="div-block-6">
                                                <h5 class="heading-15">${appliance.name}</h5>
                                            </div>
                                        </a>
                                    </div>`;

            $("#appliances_images").append(appliance_image_data);
        });
        $.each(data.recipes, function (i, recipe) {
            var recipes_image_data = `<div role="listitem" class="grid_item w-dyn-item">
                                        <a
                                            id="w-node-_703c24f6-c3e0-66b8-5382-f0d0b93a93d6-e53849ae"
                                            data-w-id="703c24f6-c3e0-66b8-5382-f0d0b93a93d6"
                                            href="#"
                                            class="grid_element w-inline-block"
                                        >
                                            <div class="div-block-6">
                                                <h5 class="heading-17">${recipe.name}</h5>
                                            </div>
                                            <img
                                                src="${recipe.image}"
                                                loading="lazy"
                                                alt=""
                                                class="grid_img"
                                            />
                                        </a>
                                    </div>`;

            $("#recipe_images").append(recipes_image_data);
        });
    });
});