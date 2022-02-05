$(function () {
    $.getJSON("js/images.json", function (data) {
        $.each(data.healthy_kitchen_council, function (i, hkc) {
            var hkc_image_data = `<div role="listitem" class="grid_item w-dyn-item addVideoOnClick show-modal" data-council_member_name="${hkc.council_member_name}" data-title="${hkc.title}" data-linked_in="${hkc.linked_in}" data-business_website1="${hkc.business_website1}" data-email1="${hkc.email1}" data-business_website2="${hkc.business_website2}" data-email2="${hkc.email2}" data-residence="${hkc.residence}" data-image="${hkc.image}" data-info="${hkc.info}">
                                        <div
                                            id="w-node-_654c9179-ae6c-a599-3830-2964bcfd5f72-e53849ae"
                                            class="grid_element w-inline-block"
                                        >
                                            <div class="div-block-6">
                                                <h3 class="heading s blue">${hkc.council_member_name} </h3>
                                                <h5> ${hkc.title}</h5>
                                            </div>
                                            <img
                                                src="${hkc.image}"
                                                loading="lazy"
                                                alt=""
                                                class="grid_img"
                                            />
                                        </div>
                                    </div>`;

            $("#hkc_image").append(hkc_image_data);
        });
        $.each(data.appliances, function (i, appliance) {
            const appliance_image_data = `<div role="listitem" class="grid_item w-dyn-item addImage1OnClick iconPlay" data-name="${appliance.name}" data-modal_image="${appliance.modal_image}" data-modal_video="${appliance.modal_video}" data-modal_title="${appliance.modal_title}" data-modal_description="${appliance.modal_description}">
                                        <div id="w-node-_058f6aaf-86c3-1d0c-2ab0-d1fdd69ead04-e53849ae"
                                            data-w-id = "670e098e-af47-a036-38b9-069d5ec1f935"
                                            class = "image_icon_play council_grid w-inline-block addImage1OnClick ${appliance.modal_video ? '':'d-none'}" >
                                            <img
                                                src="images/pngaaa.com-177719.png"
                                                loading="lazy"
                                                sizes="100vw"
                                                srcset="
                                                    images/pngaaa.com-177719-p-500.png  500w,
                                                    images/pngaaa.com-177719.png       1025w
                                                "
                                                alt="" style="cursor: pointer"
                                                class="image-8"
                                            />
                                        </div>
                                        <a
                                            id="w-node-_670e098e-af47-a036-38b9-069d5ec1f935-e53849ae"
                                             data-w-id="670e098e-af47-a036-38b9-069d5ec1f935"
                                            href="#"
                                            class="grid_element w-inline-block show-modal1"
                                            ><img
                                                src="${appliance.image}"
                                                loading="lazy"
                                                alt=""
                                                class="grid_img"
                                            />
                                            <div class="div-block-6">
                                                <h5 class="heading-15">
                                                    ${appliance.name}
                                                </h5>
                                            </div>
                                        </a>
                                    </div>`;

            $("#appliances_images").append(appliance_image_data);
        });
        $.each(data.recipes, function (i, recipe) {
            var recipes_image_data = `<div role="listitem" class="grid_item w-dyn-item addImage2OnClick" data-name="${recipe.name}" data-modal_image="${recipe.modal_image}" data-modal_video="${recipe.modal_video}" data-modal_title="${recipe.modal_title}" data-description="${recipe.modal_description}">
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
        $.each(data.trailers, function (i, trailer) {
            $(".addTrailerVideo").attr("data-video", trailer.modal_video);
            $(".addTrailerVideo").attr("data-title", trailer.modal_title);
            $(".addTrailerVideo").attr("data-description", trailer.modal_description);
        });
        $.each(data.full_videos, function (i, full_video) {
            $(".addFullVideo").attr("data-video", full_video.modal_video);
            $(".addFullVideo").attr("data-title", full_video.modal_title);
            $(".addFullVideo").attr("data-description", full_video.modal_description);
        });
        $.each(data.council_watch_videos, function (i, council_watch_video) {
            $(".addWatchVideo").attr("data-video", council_watch_video.modal_video);
            $(".addWatchVideo").attr("data-title", council_watch_video.modal_title);
            $(".addWatchVideo").attr("data-description", council_watch_video.modal_description);
        });
    });
});