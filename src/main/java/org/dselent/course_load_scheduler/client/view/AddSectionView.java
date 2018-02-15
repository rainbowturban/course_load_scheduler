package org.dselent.course_load_scheduler.client.view;

import org.dselent.course_load_scheduler.client.presenter.AddSectionPresenter;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.TextBox;

public interface AddSectionView  extends BaseView<AddSectionPresenter>{
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
	Button getCancelButton();
	Button getCreateButton();
	
}