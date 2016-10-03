<?php if(isset($this->current_tab)){ ?>
	<div class="uix-field-wrapper">
		<table class="form-table">
			<tbody>
				<?php
					/* Hooked
					 * - 5	| general_settings()					class-framework-admin.php
					 * - 12	| archive_settings()					class-framework-admin.php
					 * - 15	| single_settings()						class-framework-admin.php
					 */
				?>		
				<?php do_action('lsx_framework_'.$this->current_tab.'_tab_content_top','accommodation'); ?>
				<?php
					/* Hooked
					 * - 10	| settings_page_html()					class-placeholders.php
					 * - 10	| map_marker()							class-google-maps.php
					 * - 10	| tab_settings()						lsx-search-integration.php
					 */
				?>			
				<?php do_action('lsx_framework_'.$this->current_tab.'_tab_content','accommodation'); ?>
			</tbody>
		</table>
		<?php do_action('lsx_framework_'.$this->current_tab.'_tab_bottom','accommodation'); ?>
	</div>
<?php } ?>