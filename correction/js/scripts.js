(function() {
    var $response = $('#response'),
        $form = $('#calculate-budget'),
        i = 0;

    /* Add new field */
    $('.add-field', $form).click(function() {
        i ++;

        var html = '<div class="form-elem">';
        
        html += '<label for="field-'+i+'" class="form-label">Nouveau champ</label>';
        html += '<input type="number" id="field-'+i+'" step="0.01" class="form-field">';
        html += '<span class="form-help">€ / mois</span>';
        html += '</div>';

        $(this).parent().append(html);

        return false;
    });

    /* Function to calulate each input val in one element (class in function param) */
    var calculateEntry = function(classparent) {
        var total = 0;

        $('.' + classparent + ' .form-field', $form).each(function() {
            var $i = $(this),
                value = parseFloat($i.val());

            /* Check if input has a value and is a number */
            if(value && !isNaN(value)) {
                if($i.hasClass('week')) {/* weekly input */
                    value = value * 4.33;
                } else if ($i.hasClass('year')) {/* yearly input */
                    value = value / 12;
                }

                total += parseFloat(value.toFixed(2));
            }
        });

        return total;
    };

    /* on form submit (on click input type submit) */
    $form.submit(function() {
        var msg = "",
            budget = 0;

        /* test mandatory fields */
        $('[required]', $form).each(function() {
            $field = $(this);
            
            if($field.val() == "") {
                $field.addClass('error');
            } else {
                $field.removeClass('error');
            }
        });

        /* If has no error (no empty mandatory field) */
        if(!$('.error', $form).length) {
            $response.removeClass('error-response');
            
            // budget = income - (saving + spending)
            budget = calculateEntry('income') - (calculateEntry('saving') + calculateEntry('spending'));

            msg = "Votre budget est de " + budget + ". ";

            if(budget < 0) {
                msg += "Il faut vraiment trouver une solution";
            } else if (budget > 0) {
                msg += "YOLO";
            } else {
                msg += "C'est juste !";
            }
        } else {
            msg = "Au moins un des champs n'est pas rempli";
            $response.addClass('error-response');
        }

        $response.text(msg);

        /* Stop propagation */
        return false;
    });
})();