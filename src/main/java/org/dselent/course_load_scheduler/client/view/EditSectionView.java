package org.dselent.course_load_scheduler.client.view;

import org.dselent.course_load_scheduler.client.presenter.EditSectionPresenter;

import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.TextBox;

public interface EditSectionView extends BaseView<EditSectionPresenter> {
	ListBox getTermComboBox();
	void setTermComboBox(ListBox termBoxCombo);
	TextBox getGeneratedNameTextBox();
	void setGeneratedNameTextBox(TextBox generatedNameTextBox);
	TextBox getGeneratedCRNTextBox();
	void setGeneratedCRNTextBox(TextBox generatedCRNTextBox);
	ListBox getSectionTypeComboBox();
	void setSectionTypeComboBox(ListBox sectionTypeBoxCombo);
	ListBox getSectionStartTimeComboBox();
	void setSectionStartTimeComboBox(ListBox sectionStartTimeComboBox);
	ListBox getSectionEndTimeComboBox();
	void setSectionEndTimeComboBox(ListBox sectionEndTimeComboBox);
	CheckBox getMondayCheckBox();
	CheckBox getTuesdayCheckBox();
	CheckBox getWednesdayCheckBox();
	CheckBox getThursdayCheckBox();
	CheckBox getFridayCheckBox();
	Button getCancelButton();
	Button getSubmitButton();

}
