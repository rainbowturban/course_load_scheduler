package org.dselent.course_load_scheduler.client.view.impl;

import org.dselent.course_load_scheduler.client.presenter.EditSectionPresenter;
import org.dselent.course_load_scheduler.client.view.EditSectionView;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.dom.client.ClickEvent;

public class EditSectionViewImpl extends BaseViewImpl<EditSectionPresenter> implements EditSectionView {

	private static EditSectionViewImplUiBinder uiBinder = GWT.create(EditSectionViewImplUiBinder.class);
	interface EditSectionViewImplUiBinder extends UiBinder<Widget, EditSectionViewImpl> {}
	
	@UiField Label editSectionTitle;
	@UiField Label termLabel;
	@UiField Label generatedNameLabel;
	@UiField Label generatedCRNLabel;
	@UiField Label sectionTypeLabel;
	@UiField Label sectionStartTimeLabel;
	@UiField Label sectionEndTimeLabel;
	@UiField Button submitButton;
	@UiField ListBox termComboBox;
	@UiField TextBox generatedNameTextBox;
	@UiField TextBox generatedCRNTextBox;
	@UiField ListBox sectionTypeComboBox;
	@UiField ListBox sectionStartTimeComboBox;
	@UiField ListBox sectionEndTimeComboBox;
	@UiField CheckBox mondayCheckBox;
	@UiField CheckBox tuesdayCheckBox;
	@UiField CheckBox wednesdayCheckBox;
	@UiField CheckBox thursdayCheckBox;
	@UiField CheckBox fridayCheckBox;
	@UiField Button cancelButton;
	@UiField VerticalPanel editSectionPanel;

	public EditSectionViewImpl() {
		initWidget(uiBinder.createAndBindUi(this));
	}
	
	@Override
	public ListBox getTermComboBox()
	{
		return termComboBox;
	}
	
	@Override
	public void setTermComboBox(ListBox termComboBox)
	{
		this.termComboBox = termComboBox;
	}

	@Override
	public TextBox getGeneratedNameTextBox() {
		return generatedNameTextBox;
	}
	
	@Override
	public void setGeneratedNameTextBox(TextBox generatedNameTextBox) {
		this.generatedNameTextBox = generatedNameTextBox;
	}
	
	@Override
	public TextBox getGeneratedCRNTextBox() {
		return generatedCRNTextBox;
	}
	
	@Override
	public void setGeneratedCRNTextBox(TextBox generatedCRNTextBox) {
		this.generatedCRNTextBox = generatedCRNTextBox;
	}
	
	@Override
	public ListBox getSectionTypeComboBox()
	{
		return sectionTypeComboBox;
	}
	
	@Override
	public void setSectionTypeComboBox(ListBox sectionTypeComboBox)
	{
		this.sectionTypeComboBox = sectionTypeComboBox;
	}
	
	@Override
	public ListBox getSectionStartTimeComboBox()
	{
		return sectionStartTimeComboBox;
	}
	
	@Override
	public void setSectionStartTimeComboBox(ListBox sectionStartTimeComboBox)
	{
		this.sectionStartTimeComboBox = sectionStartTimeComboBox;
	}
	
	@Override
	public ListBox getSectionEndTimeComboBox()
	{
		return sectionStartTimeComboBox;
	}
	
	@Override
	public void setSectionEndTimeComboBox(ListBox sectionEndTimeComboBox)
	{
		this.sectionEndTimeComboBox = sectionEndTimeComboBox;
	}
	
	@Override
	public CheckBox getMondayCheckBox()
	{
		return mondayCheckBox;
	}
	
	@Override
	public CheckBox getTuesdayCheckBox()
	{
		return tuesdayCheckBox;
	}
	
	@Override
	public CheckBox getWednesdayCheckBox()
	{
		return wednesdayCheckBox;
	}
	
	@Override
	public CheckBox getThursdayCheckBox()
	{
		return thursdayCheckBox;
	}
	
	@Override
	public CheckBox getFridayCheckBox()
	{
		return fridayCheckBox;
	}
	
	@Override
	public Button getCancelButton()
	{
		return cancelButton;
	}
	
	@Override
	public Button getSubmitButton()
	{
		return submitButton;
	}
	
	@Override
	public void setPresenter(EditSectionPresenter presenter)
	{
		this.presenter = presenter;
	}

	@Override
	public Widget getWidgetContainer()
	{
		return this;
	}

	@Override
	public HasWidgets getViewRootPanel()
	{
		return editSectionPanel;
	}

	@UiHandler("submitButton")
	void onSubmitButtonClick(ClickEvent event) {
		presenter.editSection();
	}
}
