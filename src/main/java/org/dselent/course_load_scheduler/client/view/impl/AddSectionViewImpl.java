package org.dselent.course_load_scheduler.client.view.impl;

import org.dselent.course_load_scheduler.client.presenter.AddSectionPresenter;
import org.dselent.course_load_scheduler.client.view.AddSectionView;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Button;


public class AddSectionViewImpl extends BaseViewImpl<AddSectionPresenter> implements AddSectionView {

	private static AddSectionViewImplUiBinder uiBinder = GWT.create(AddSectionViewImplUiBinder.class);
	
	interface AddSectionViewImplUiBinder extends UiBinder<Widget, AddSectionViewImpl> {	}
	
	@UiField Label termLabel;
	@UiField Label addSectionTitle;
	@UiField Label generatedNameLabel;
	@UiField Label generatedCRNLabel;
	@UiField Label sectionTypeLabel;
	@UiField ListBox termComboBox;
	@UiField TextBox generatedNameTextBox;
	@UiField TextBox generatedCRNTextBox;
	@UiField ListBox sectionTypeComboBox;
	@UiField VerticalPanel addSectionPanel;
	@UiField Button cancelButton;
	@UiField Button createButton;
	@UiField Label sectionStartTimeLabel;
	@UiField ListBox sectionStartTimeComboBox;
	@UiField Label sectionEndTimeLabel;
	@UiField ListBox sectionEndTimeComboBox;

	public AddSectionViewImpl() {
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
	public Button getCancelButton()
	{
		return cancelButton;
	}
	
	@Override
	public Button getCreateButton()
	{
		return createButton;
	}
	
	@Override
	public void setPresenter(AddSectionPresenter presenter)
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
		return addSectionPanel;
	}
}
